<?php

namespace App\Http\Controllers;

use App\Models\Programming_langugage;
use App\Models\Project;
use App\Models\ProjectTask;
use App\Models\ProjectWithLanguage;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //Add project
    public function addProject(Request $request){
        //Validate
        $validation =  $request->validate([
            'project_title' => 'required|string|max:35',
            'project_info' => 'required|string',
            'technology' => 'array'
        ]);

        //Insert into database
        $project = Project::create([
            'project_title' => $validation['project_title'],
            'project_info' => $validation['project_info']
        ]);

        $languages = $request->technology ?? [];

        foreach($languages as $lang){
            ProjectWithLanguage::create([
                'project_id' => $project->id,
                'language_id' => $lang
            ]);
        }
        

            return response()->json([
                'status' => 'success',
                'message' => 'Project has been added successfully'
            ],201);

        //
    }

    //Fetch Project
    public function fetchProject(){
        $projects = ProjectWithLanguage::join('projects', 'projects.id', '=', 'project_with_languages.project_id')->
                    join('programing_langugages', 'programing_langugages.id', '=', 'project_with_languages.language_id')->
                    select('projects.id','projects.project_title','projects.project_info','programing_langugages.language')
                    ->get();
        

            //Grouping to show projects
            $grouped = $projects->groupBy('id')->map(function($items){
                $first = $items->first();
                return [
                    'id' => $first->id,
                    'project_title' => $first->project_title,
                    'project_info' => $first->project_info,
                    'languages' => $items->pluck('language')->toArray(),
                ];
                
            })->values();

        return response()->json([
            'status' => 'success',
            'projects' => $grouped
        ]);

    }

    // Fetch project by id
    public function fetchProjectById($id){

       // Prevents malformed input & injection attempts 
       if(!is_numeric($id)){
        return response()->json(['message' => 'Invalid project id'],400);
       }

       // Fetch project only if it's belongs to logged-in user
       $project = Project::where('id',$id)
                        ->first();

       // If project not found or unauthorized
       if(!$project){
        return response()->json(['message' => 'Project is not available'],404);
       }

       // Fetch project task if it's belongs to selected project
       $projectTask = Project::where('projects.id', $id)
                    ->join('project_tasks','project_tasks.project_id','=','projects.id')
                    ->select('project_tasks.id','project_tasks.task_name','project_tasks.task_status')
                    ->get();

       // Return safe data
       return response()->json([
        'project' => $project,
        'projectTasks' => $projectTask
       ],200);
    }

    // Add Task of selected project
    public function addTask(Request $request){

        //Validate input (prevents invalid or malicious data)
        $validate = $request->validate([
            'project_id' => 'numeric|required',
            'task_name' => 'string|required'
        ]);

        // Ensure the login user owns this data
        // Prevent's attackers from adding task to other people's project
        if(!Project::where('id',$validate['project_id'])
                    ->exists()){
                        return response()->json([
                            'status' => 'error',
                            'message'=> 'Unauthorized project access'
                        ],403);
        }
            

         if(!$request->project_id){
            return response()->json(['Project Id is invalid']);
        }

        // Using fillable protects against Mass Asignment attacks
        ProjectTask::create([
            'project_id' => $validate['project_id'],
            'task_name' => $validate['task_name']
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Task Added Successfully'
        ],201);
    }

    // Show Task of selected project
    public function showTask(Request $request){

    }
}

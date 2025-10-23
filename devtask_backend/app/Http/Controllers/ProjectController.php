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

    //fetch project by id
    public function fetchProjectById($id){

       if(!is_numeric($id)){
        return response()->json(['message' => 'Invalid id']);
       }

       $project = Project::find($id);

       if(!$project){
        return response()->json(['message' => 'Project is not available']);
       }

       return response()->json([
        'project' => $project
       ]);
    }

    //Add Task
    public function addTask(Request $request){

        if(!$request->project_id){
            return response()->json(['Project Id is invalid']);
        }

        //Validate
        $validate = $request->validate([
            'project_id' => 'numeric|required',
            'task_name' => 'string|required'
        ]);

        ProjectTask::create([
            'project_id' => $validate['project_id'],
            'task_name' => $validate['task_name']
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Task Added Successfully'
        ]);
    }
}

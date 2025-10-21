<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //
    public function addProject(Request $request){
        //Validate
        $validation =  $request->validate([
            'project_title' => 'required|string|max:35',
            'project_info' => 'required|string'
        ]);

        //Insert into database
        $project = Project::create([
            'project_title' => $validation['project_title'],
            'project_info' => $validation['project_info']
        ]);

        if($project){
            return response()->json([
                'status' => 'success',
                'message' => 'Project has been added successfully'
            ],201);
        }

        //
    }
}

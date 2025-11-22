<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class TrackerController extends Controller
{
    //Fetch project for tarck 
    public function fetchProject_list(){

       $projects =  Project::all();

       return response()->json([
        'status' => 'success',
        'projects' => $projects
       ]);
    }
}

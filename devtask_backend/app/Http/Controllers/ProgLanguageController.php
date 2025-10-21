<?php

namespace App\Http\Controllers;

use App\Models\Programming_langugage;
use Illuminate\Http\Request;

class ProgLanguageController extends Controller
{
    //Add multilple language
    public function addLanguage(){
        $language = Programming_langugage::insert([
            ['language' => 'HTML'],
            ['language' => 'CSS'],
            ['language' => 'Javascript'],
            ['language' => 'React'],
            ['language' => 'PHP'],
            ['language' => 'Laravel'],
            ['language' => 'MySQL'],
            ['language' => 'Vue.js'],
            ['language' => 'Node.js'],
            ['language' => 'Express.js']
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Languages added successfully'
        ]);
    }

    //Fetch languages
    public function fetchLanguage(){

        $languages = Programming_langugage::select('id','language')->get();

        return response()->json([
            'status' => 'success',
            'languages' => $languages
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    //
    public function add_user(Request $request){
        
        Profile::create([
            'name' => 'Amarjit Paswan',
            'bio' => 'I am a Full Stack Developer',
            'github_url' => 'github.com',
            'avatar_url' => 'avatarurl.com'
        ]);
    }

    public function fetch_user(){
        $profile = Profile::first();

        if(!$profile){
            return response()->json([
                'message' => 'No user found'
            ]);
        }

        return response()->json([
            'name' => $profile->name,
            'bio' => $profile->bio,
            'avatar_url' => $profile->avatar_url,
            'github_url' => $profile->github_url
        ]);
    }
}

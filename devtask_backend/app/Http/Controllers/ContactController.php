<?php

namespace App\Http\Controllers;

use App\Mail\autoReplyMail;
use App\Mail\ContactMessageMail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    //Send Message to database
    public function sendMessage(Request $request){
        //Validate input-> prevents invalid or malicious data
        $validate = Validator::make($request->all(),[
            'email' => ['required', 'email'],
            'message' => ['required', 'string']
        ],
        [
            //Custom error message
            'email.required' => 'Please enter your email address',
            'email.email' => 'Your email is not valid',

            'message.required' => 'Please enter your message',
            'message.string' => 'Message must be text only'
        ]);

        //If fails -> return clean JSON error response
        if($validate->fails()){
            return response()->json([
                'errors' => $validate->errors()
            ],422);
        }


        //Send message to admin
        Mail::to('amarjitpaswan409@gmail.com')
                ->send(new ContactMessageMail($request->email, $request->message));

        //Auto reply message to user
        Mail::to($request->email)->send(new autoReplyMail($request->email));

        //If everythings is ok
        return response()->json([
            'status' => 'success',
            'message' => 'Message sent successfully'
        ],200);
          
    }
}

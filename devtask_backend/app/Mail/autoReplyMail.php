<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class autoReplyMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $userEmail;

    public function __construct($useremail)
    {
        //
        $this->userEmail = $useremail;
    }
    
    public function build(){
        return $this->subject('We received your message!')
                    ->view('autoreply');
    }

   
}

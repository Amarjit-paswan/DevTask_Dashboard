<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programming_langugage extends Model
{
    //
    use HasFactory;
    protected $table = 'programing_langugages';

    protected $fillable = ['language'];
}

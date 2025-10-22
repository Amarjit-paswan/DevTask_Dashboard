<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectWithLanguage extends Model
{
    //
    protected $table = 'project_with_languages';
    protected $fillable = ['project_id','language_id'];
}

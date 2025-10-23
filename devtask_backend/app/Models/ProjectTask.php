<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectTask extends Model
{
    //
    protected $table = 'project_tasks';
    protected $fillable = ['project_id','task_name'];
}

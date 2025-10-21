<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProgLanguageController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/store', [ProfileController::class, 'add_user']);
Route::get('/userDetails', [ProfileController::class,'fetch_user']);

//Add Project
Route::post('/project',[ProjectController::class, 'addProject']);
Route::post('/language',[ProgLanguageController::class, 'fetchLanguage']);
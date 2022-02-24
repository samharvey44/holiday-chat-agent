<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Question\IndexRequest;
use App\Http\Resources\QuestionResource;
use App\Http\Controllers\Controller;
use App\Models\Question;

class QuestionController extends Controller {
    /**
     * Get all questions.
     *
     * @param \App\Http\Requests\Question\IndexRequest $request
     * 
     * @return \App\Http\Resources\QuestionResource
     */
    public function index(IndexRequest $request) {
        return QuestionResource::collection(Question::with('answers')->orderBy('order')->get());
    }
}

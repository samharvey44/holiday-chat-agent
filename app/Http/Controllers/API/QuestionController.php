<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Question\GetQuestionsRequest;
use App\Http\Resources\QuestionResource;
use App\Http\Controllers\Controller;
use App\Models\Question;

class QuestionController extends Controller {
    /**
     * Get all questions.
     *
     * @param \App\Http\Requests\Question\GetQuestionsRequest $request
     * 
     * @return \App\Http\Resources\QuestionResource
     */
    public function index(GetQuestionsRequest $request) {
        return QuestionResource::collection(
            Question::with('answers')
                ->get()
        );
    }
}

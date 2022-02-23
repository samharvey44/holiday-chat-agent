<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Category\IndexRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller {
    /**
     * Return a collection of allcategories.
     *
     * @param \App\Http\Requests\Category\IndexRequest $request
     * 
     * @return \App\Http\Resources\CategoryResource
     */
    public function index(IndexRequest $request) {
        return CategoryResource::collection(Category::all());
    }
}

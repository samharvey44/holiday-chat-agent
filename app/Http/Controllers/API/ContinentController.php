<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Continent\IndexRequest;
use App\Http\Resources\ContinentResource;
use App\Http\Controllers\Controller;
use App\Models\Continent;

class ContinentController extends Controller {
    /**
     * Return a collection of all continents.
     *
     * @param \App\Http\Requests\Continent\IndexRequest $request
     * 
     * @return \App\Http\Resources\ContinentResource
     */
    public function index(IndexRequest $request) {
        return ContinentResource::collection(Continent::all());
    }
}

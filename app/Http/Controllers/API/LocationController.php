<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Location\IndexRequest;
use App\Http\Resources\LocationResource;
use App\Http\Controllers\Controller;
use App\Models\Location;

class LocationController extends Controller {
    /**
     * Return a collection of all locations.
     *
     * @param \App\Http\Requests\Location\IndexRequest $request
     * 
     * @return \App\Http\Resources\LocationResource
     */
    public function index(IndexRequest $request) {
        return LocationResource::collection(Location::all());
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Holiday\IndexRequest;
use App\Http\Resources\HolidayResource;
use App\Http\Controllers\Controller;
use App\Models\Holiday;

class HolidayController extends Controller {
    /**
     * Get holidays matching request parameters.
     *
     * @param \App\Http\Requests\Holiday\IndexRequest $request
     * 
     * @return \App\Http\Resources\HolidayResource
     */
    public function index(IndexRequest $request) {
        $holidays = Holiday::with(
            'temperature',
            'continent',
            'category',
            'location',
            'country',
            'city'
        )
            ->where('price_per_night', '<=', $request->input('pricePerNight'));

        if ($request->input('temperature') !== 'any') $holidays->whereRelation('temperature', 'name', $request->input('temperature'));
        if ($request->input('category') !== 'any') $holidays->whereRelation('category', 'name', $request->input('category'));
        if ($request->input('location') !== 'any') $holidays->whereRelation('location', 'name', $request->input('location'));

        return HolidayResource::collection(
            $holidays->get()
        );
    }
}

<?php

namespace App\Http\Requests\Holiday;

use Illuminate\Foundation\Http\FormRequest;

use Auth;

class StoreRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return Auth::check() && Auth::user()->role->name === "admin";
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        return [
            'hotelName' => 'required|string|max:255',
            'pricePerNight' => 'required|numeric|min:0',
            'rating' => 'required|numeric|min:0|max:5',
            'temperature' => 'required|exists:temperatures,id',
            'continent' => 'required|exists:continents,id',
            'category' => 'required|exists:categories,id',
            'location' => 'required|exists:locations,id',
            'country' => 'required|exists:countries,id',
            'city' => 'nullable|exists:cities,id',
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HolidayResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request) {
        return [
            'id' => $this->id,
            'createdAt' => $this->created_at,
            'hotelName' => $this->hotel_name,
            'pricePerNight' => $this->price_per_night,
            'rating' => $this->rating,

            'temperature' => TemperatureResource::make($this->temperature),
            'continent' => ContinentResource::make($this->continent),
            'location' => LocationResource::make($this->location),
            'category' => CategoryResource::make($this->category),
            'country' => CountryResource::make($this->country),
            'city' => CityResource::make($this->city),
        ];
    }
}

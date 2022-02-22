<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model {
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int|string>
     */
    protected $fillable = [
        'name'
    ];

    /**
     * The holidays in this location.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function holidays() {
        return $this->hasMany(Holiday::class, 'location_id');
    }
}

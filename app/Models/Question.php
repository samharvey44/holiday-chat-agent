<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model {
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'key',
        'text',
        'order',
    ];

    /**
     * The answers that belong to the question.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function answers() {
        return $this->hasMany(Answer::class, 'question_id');
    }
}

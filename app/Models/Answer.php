<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model {
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'text',
    ];

    /**
     * The question that owns the answer.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function question() {
        return $this->belongsTo(Question::class, 'question_id');
    }
}

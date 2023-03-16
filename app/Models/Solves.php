<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solves extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'scramble',
        'time',
        'time_formatted',
        'average_of_5',
        'average_of_5_formatted',
        'average_of_12',
        'average_of_12_formatted',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'user_id' => 'integer',
        'scramble' => 'string',
        'time' => 'integer',
        'time_formatted' => 'string',
        'average_of_5' => 'integer',
        'average_of_5_formatted' => 'string',
        'average_of_12' => 'integer',
        'average_of_12_formatted' => 'string',
    ];
}

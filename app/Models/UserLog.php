<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'user_name',
        'access_date',
    ];

    protected $casts = [
        'access_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

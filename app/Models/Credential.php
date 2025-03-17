<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Credential extends Model
{
    protected $guarded = [];

    public function scopeOwnedByUser($query, $userId = null)
    {
        return $query->where('user_id', $userId ?? auth()->id());
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    protected $guarded = [];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeOwnedByUser($query)
    {
        return $query->where('user_id', auth()->id());
    }

    public function workflows(): HasMany
    {
        return $this->hasMany(Workflow::class);
    }
}

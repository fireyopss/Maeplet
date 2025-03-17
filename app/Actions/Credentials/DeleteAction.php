<?php
namespace App\Actions\Credentials;

use App\Models\Credential;

class DeleteAction 
{
    public function execute(Credential $credential): ?bool
    {
        return $credential->delete();
    }
}
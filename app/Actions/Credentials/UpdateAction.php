<?php
namespace App\Actions\Credentials;

use App\DTO\CredentialDTO;
use App\Models\Credential;

class UpdateAction
{
    public function execute(CredentialDTO $dto, Credential  $credential): Credential
    {
        $credential->update($dto->toArray());
        return $credential;
    }
}
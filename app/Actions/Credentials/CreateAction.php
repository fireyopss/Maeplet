<?php
namespace App\Actions\Credentials;

use App\DTO\CredentialDTO;
use App\Models\Credential;

class CreateAction {
    public function execute(CredentialDTO $credentialDTO): Credential
    {
        return Credential::create(array_merge($credentialDTO->toArray(), ['user_id' => auth()->id()]));
    }
}
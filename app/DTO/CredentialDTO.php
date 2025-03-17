<?php
namespace App\DTO;

use App\DTO\BaseDTO;

class CredentialDTO extends BaseDTO
{
    public string $name;
    public string $cloud_provider;

    public string $access_key_id;
    public string $secret_key;

    public function __construct(string $name, string $cloud_provider, string $secret_key,string $access_key_id= "n/a")
    {
        $this->name = $name;
        $this->cloud_provider = $cloud_provider;
        $this->access_key_id = $access_key_id;
        $this->secret_key = $secret_key;
    }
}
<?php

namespace App\Filament\Resources\ProductPlusPointResource\Pages;

use App\Filament\Resources\ProductPlusPointResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProductPlusPoint extends EditRecord
{
    protected static string $resource = ProductPlusPointResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

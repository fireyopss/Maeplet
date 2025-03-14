<?php

namespace App\Filament\Resources\ProductResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductPlusPointsRelationManager extends RelationManager
{
    protected static string $relationship = 'productPlusPoints';

    public function form(Form $form): Form
    {
        return $form
            ->schema([

            TextInput::make('point')
                ->label('Point')
                ->required()
                ->placeholder('Enter the product point'),

            TextInput::make('pos')
                ->label('Position')
                ->required()
                ->placeholder('Enter the product position'),

            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('productPlusPoints')
            ->columns([
                TextColumn::make('product.name')
                ->label('Product')
                ->searchable()
                ->sortable(),
            TextColumn::make('point')
                ->label('Point')
                ->searchable()
                ->sortable(),
            TextColumn::make('pos')
                ->label('Position')
                ->searchable()
                ->sortable(),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}

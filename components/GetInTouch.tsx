"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function GetinTouch() {
    return (
            <div className="max-w-2xl mx-auto p-4">
            <form onSubmit={e=>[alert("coucou"),e.preventDefault()]} className="space-y-6">
                <div>
                <Label htmlFor="name">Comment voulez-vous être appelé ?</Label>
                <Input id="name" placeholder="Mme. Fifie" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="email">Adresse mail</Label>
                    <Input id="email" type="email" placeholder="truc@truc.com" />
                </div>
                <div>
                    <Label htmlFor="phone">Numéro</Label>
                    <Input id="phone" type="tel" placeholder="+261 32 00 123 45" />
                </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="product">Intitulé de produit</Label>
                    <Input id="product" placeholder="Backpack" />
                </div>
                <div>
                    <Label htmlFor="category">Catégorie</Label>
                    <Select>
                    <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="clothing">Vêtements</SelectItem>
                        <SelectItem value="accessories">Accessoires</SelectItem>
                        <SelectItem value="electronics">Électronique</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                </div>
                
                <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Your description here" rows={4} />
                </div>
                
                <Button type="submit" className="w-full">Soumettreeee</Button>
            </form>
            </div>
    );
}

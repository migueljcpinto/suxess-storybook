import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-bold text-4xl">
            Welcome to the Design System
          </h1>
          <p className="mb-8 text-muted-foreground text-xl">
            A collection of modern and reusable UI components
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Ver Storybook</Button>
            <Button variant="outline" size="lg">
              Documentation
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>
                More than 40 UI components ready to use
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Buttons, forms, modals, tables and more.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Design System</CardTitle>
              <CardDescription>
                Based on Tailwind CSS and Radix UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Accessible and customizable components.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Storybook</CardTitle>
              <CardDescription>
                Interactive documentation of components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Test and explore all components.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { Separator } from '@repo/design-system/components/ui/separator';
import {
  ArrowRight,
  Code,
  ExternalLink,
  Github,
  Palette,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Suxess</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Storybook
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Zap className="mr-1 h-3 w-3" />
              Design System Moderno
            </Badge>
            <h1 className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text font-bold text-5xl text-transparent tracking-tight md:text-6xl">
              Construa interfaces incríveis
            </h1>
            <p className="mb-8 text-muted-foreground text-xl leading-relaxed">
              Uma coleção completa de componentes React modernos, acessíveis e
              personalizáveis. Acelere o desenvolvimento com componentes
              testados e documentados.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Storybook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 font-bold text-3xl">
              Por que escolher o Suxess?
            </h2>
            <p className="text-lg text-muted-foreground">
              Desenvolvido com as melhores práticas e tecnologias modernas
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group border-0 bg-gradient-to-br from-primary/5 to-transparent transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Design Consistente</CardTitle>
                <CardDescription>
                  Componentes baseados em um sistema de design unificado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Cores, tipografia e espaçamentos harmoniosos em todos os
                  componentes.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-secondary/5 to-transparent transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Code className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>Desenvolvimento Rápido</CardTitle>
                <CardDescription>
                  Mais de 40 componentes prontos para usar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Botões, formulários, modais, tabelas e muito mais.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-accent/5 to-transparent transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Acessibilidade</CardTitle>
                <CardDescription>
                  Baseado em Radix UI e WAI-ARIA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Componentes acessíveis por padrão, seguindo as melhores
                  práticas.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-primary/5 to-transparent transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Otimizado para velocidade e eficiência
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Tree-shaking automático e bundle size otimizado.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-secondary/5 to-transparent transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>Comunidade</CardTitle>
                <CardDescription>
                  Suporte ativo e documentação completa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Storybook interativo e documentação detalhada.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-accent/5 to-transparent transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Star className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Customizável</CardTitle>
                <CardDescription>
                  Totalmente personalizável com Tailwind CSS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Adapte os componentes às suas necessidades específicas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-3xl">Pronto para começar?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Explore os componentes no Storybook e comece a construir
              interfaces incríveis hoje mesmo.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group">
                <ExternalLink className="mr-2 h-4 w-4" />
                Abrir Storybook
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                Ver no GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Suxess</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Design System moderno e acessível para React.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Recursos</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a
                    href="/components"
                    className="transition-colors hover:text-foreground"
                  >
                    Componentes
                  </a>
                </li>
                <li>
                  <a
                    href="/docs"
                    className="transition-colors hover:text-foreground"
                  >
                    Documentação
                  </a>
                </li>
                <li>
                  <a
                    href="/storybook"
                    className="transition-colors hover:text-foreground"
                  >
                    Storybook
                  </a>
                </li>
                <li>
                  <a
                    href="/examples"
                    className="transition-colors hover:text-foreground"
                  >
                    Exemplos
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Desenvolvimento</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a
                    href="https://github.com"
                    className="transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/issues"
                    className="transition-colors hover:text-foreground"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/contributing"
                    className="transition-colors hover:text-foreground"
                  >
                    Contribuir
                  </a>
                </li>
                <li>
                  <a
                    href="/changelog"
                    className="transition-colors hover:text-foreground"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Tecnologias</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Radix UI</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © 2024 Suxess Design System. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">v1.0.0</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

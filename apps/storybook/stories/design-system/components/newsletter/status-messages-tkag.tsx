import { cn } from "@repo/design-system/utils/cn";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button-tkag";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card-tkag";

export function SuccessMessage({
  title,
  message,
  linkText,
  html,
}: {
  title: string;
  linkText: string;
  message?: string;
  html?: string;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <CardTitle className="text-center font-bold text-2xl text-green-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <p className="mb-4 text-center text-gray-600">{message}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link
          className={cn(
            buttonVariants({
              variant: "link",
              className: "border-none text-white",
            })
          )}
          href="/"
        >
          {linkText}
        </Link>
      </CardFooter>
    </Card>
  );
}

export function ErrorMessage({
  title,
  message,
  linkText,
  html,
}: {
  title: string;
  linkText: string;
  message?: string;
  html?: string;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="whitespace-nowrap text-center font-bold text-2xl text-red-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <p className="mb-4 text-center text-gray-600">{message}</p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col justify-center gap-2 sm:flex-row">
        <Link
          className={cn(
            buttonVariants({
              variant: "link",
              className: "border-none text-white",
            })
          )}
          href="/"
        >
          {linkText}
        </Link>
      </CardFooter>
    </Card>
  );
}

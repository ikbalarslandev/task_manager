import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionComponent() {
  return (
    <Accordion type="single" collapsible className="w-44">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {" "}
          <div className="flex items-center justify-center gap-2">
            <div className="bg-red-600 w-2 h-2 rounded-full"></div>
            <p> Proje isim 1</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-blue-600 w-2 h-2 rounded-full"></div>
            <p> Proje isim 2</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          {" "}
          <div className="flex items-center justify-center gap-2">
            <div className="bg-yellow-600 w-2 h-2 rounded-full"></div>
            <p> Proje isim 3</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          {" "}
          <div className="flex items-center justify-center gap-2">
            <div className="bg-purple-600 w-2 h-2 rounded-full"></div>
            <p> Proje isim 4</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <div className="text-sm">Proje Olustur</div>
    </Accordion>
  );
}

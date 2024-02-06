import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <main>
      <section className="h-[40vh] bg-[url('/images/bg.jpg')] bg-cover bg-center flex items-center justify-center before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#121212] before:opacity-50 relative">
        <div className="text-white py-0 px-4 max-w-[760px] text-center relative">
          <h1 className="font-bold text-5xl">Ai Gerador de Imagens</h1>
          <p className="text-lg mt-3">
            Converta seu texto em imagem em um segundo usando o poder dessa
            ferramenta.
          </p>
          <form
            action="#"
            className="w-full bg-white h-14 rounded-[30px] flex items-center justify-between p-[6px] mt-11 mx-0 mb-4"
          >
            <Input
              placeholder="Descreva o que voce quer ver"
              className="w-full h-full py-0 px-4  outline-none border-none rounded-[30px] text-lg text-black"
              required
            />

            <div className="flex h-full gap-4">
              <Select>
                <SelectTrigger className="w-[180px] border-none outline-none text-lg text-black">
                  <SelectValue placeholder="images" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup>
                    <SelectLabel>1-Image</SelectLabel>
                    <SelectItem value="1">1 Image</SelectItem>
                    <SelectItem value="2">2 Images</SelectItem>
                    <SelectItem value="3">3 Images</SelectItem>
                    <SelectItem value="4">4 Images</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button
                type="submit"
                className="text-lg rounded-[30px] border-none outline-none bg-[#4949e7] font-medium py-0 px-6 "
                variant="outline"
              >
                Generate{" "}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="flex gap-4 py-0 px-4 max-w-[1250px] my-12 mx-0 justify-center flex-wrap">
        <Card />
      </section>
    </main>
  );
}

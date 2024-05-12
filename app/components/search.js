import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="lg:ml-[300px] hidden lg:block bg-transparent">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px] bg-transparent"
      />
    </div>
  )
}
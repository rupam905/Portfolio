import { ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <>
      <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 pt-8 flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Rupam Dutta. All rights reserved.
          </p>
      </footer>
      <a href="#hero" className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform z-50">
        <ArrowUp size={24}/>
      </a>
    </>
  )
}

export default Footer

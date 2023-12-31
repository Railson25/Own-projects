import { SectionTitle } from "./section-title"
import { TestimonialsCard } from "./testimonials-card"

export const Testimonials = () => {
    return(
        <div className="w-full pb-28 flex flex-col items-center">
            <SectionTitle
                title="What our students say"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th "
            />
            <div className="gap-x-10 mt-[46px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                <TestimonialsCard 
                    src="/images/testimonial-image-one.jpg"
                    description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  "
                    title="Tammy Sandoval"
                    role="Professor"
                />
                <TestimonialsCard 
                    src="/images/testimonial-image-one.jpg"
                    description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  "
                    title="James Swanson"
                    role="Student"
                />
                <TestimonialsCard 
                    src="/images/testimonial-image-two.jpg"
                    description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  "
                    title="Candace Walker"
                    role="Student"
                />
            </div>
        </div>
    )
}
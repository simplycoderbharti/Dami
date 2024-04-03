import React from 'react';
import '../App.css'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Company X',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nisi nec dolor fermentum ullamcorper.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Manager, Company Y',
    comment: 'Sed lobortis, nisi a varius fermentum, nisi justo suscipit magna, in ultricies odio neque non risus.'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    title: 'Designer, Company Z',
    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  }
];

const Testimonial = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Testimonials</h1>
      <div className="row justify-content-center">
        {testimonials.map(testimonial => (
          <>
          <div key={testimonial.id} className="col-md-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <h5 className="card-title">{testimonial.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{testimonial.title}</h6>
                <p className="card-text">{testimonial.comment}</p>
              </div>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const GetHelpForm = () => {
  const [category, setCategory] = useState('Medicine');

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      urgency: 'Normal',
      mealType: 'Any',
      clothingType: 'Men',
      size: 'M'
    }
  });

  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  console.log(user.email)

  const onSubmit = (data) => {
    const finalData = { ...data, category, email: user.email};
    console.log('Form Data:', finalData);
    axiosSecure.post('/requests', finalData)
      .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            title: "Request sent successfull",
            text: "",
            icon: "success"
          });
        }
      })
    reset();
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-2xl mx-auto card bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-secondary mb-2">Request Help</h2>
          <p className="text-accent mb-6">Fill out the details below and we'll connect you with someone who can help.</p>

          <div className="form-control w-full mb-6">
            <label className="label font-semibold">What do you need help with?</label>
            <div className="join w-full border border-primary/20">
              {['Medicine', 'Food', 'Clothing'].map((item) => (
                <input
                  key={item}
                  type="radio"
                  name="category_toggle"
                  aria-label={item}
                  className="join-item btn flex-1 checked:!text-white"
                  checked={category === item}
                  onChange={() => {
                    setCategory(item);
                    reset({ urgency: 'Normal' });
                  }}
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {category === 'Medicine' && (
              <div className="grid grid-cols-1 gap-4 animate-in fade-in duration-300">
                <div className="form-control">
                  <label className="label">Medicine Names</label>
                  <input
                    {...register("medicineNames", { required: "Medicine name is required" })}
                    type="text"
                    placeholder="e.g. Paracetamol"
                    className={`input input-bordered focus:border-primary block w-full mt-2 ${errors.medicineNames ? 'input-error' : ''}`}
                  />
                  {errors.medicineNames && <span className="text-error text-sm mt-1">{errors.medicineNames.message}</span>}
                </div>
                <div className="form-control">
                  <label className="label">Quantity / Duration</label>
                  <input
                    {...register("quantityDuration")}
                    type="text"
                    placeholder="e.g. 2 strips or 5 days"
                    className="input input-bordered focus:border-primary block w-full mt-2"
                  />
                </div>
              </div>
            )}

            {category === 'Food' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
                <div className="form-control">
                  <label className="label">Number of meals / people</label>
                  <input
                    {...register("mealCount", { required: "Required", min: 1 })}
                    type="number"
                    className={`input input-bordered focus:border-primary ${errors.mealCount ? 'input-error' : ''}`}
                  />
                </div>
                <div className="form-control">
                  <label className="label">Meal Type</label>
                  <select {...register("mealType")} className="select select-bordered focus:border-primary">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Any">Any</option>
                  </select>
                </div>
              </div>
            )}

            {category === 'Clothing' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
                <div className="form-control">
                  <label className="label">Type</label>
                  <select {...register("clothingType")} className="select select-bordered focus:border-primary">
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Child">Child</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">Size</label>
                  <select {...register("size")} className="select select-bordered focus:border-primary">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div className="form-control md:col-span-2">
                  <label className="label">Quantity</label>
                  <input
                    {...register("clothingQuantity", { min: 1 })}
                    type="number"
                    className="input input-bordered focus:border-primary block w-full mt-2"
                  />
                </div>
              </div>
            )}

            <div className="divider">Details</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">Location</label>
                <input
                  {...register("location", { required: "Location is required" })}
                  type="text"
                  placeholder="Enter area or city"
                  className={`input input-bordered focus:border-primary ${errors.location ? 'input-error' : ''}`}
                />
                {errors.location && <span className="text-error text-sm mt-1">{errors.location.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">Urgency</label>
                <select {...register("urgency")} className="select select-bordered focus:border-primary">
                  <option value="Normal">Normal</option>
                  <option value="Urgent" className="text-error font-bold">Urgent</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-8 text-white text-lg">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetHelpForm;
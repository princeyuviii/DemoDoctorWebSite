import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctors: [
    {
      id: 1,
      name: "Dr. Harry Potter",
      specialization: "Cardiologist",
      department: "Cardiology",
      desc: "Senior cardiologist specializing in the diagnosis and treatment of heart conditions such as coronary artery disease, hypertension, and heart failure. Known for patient-centric care and preventive cardiology.",
      experience: "15 years",
      rating: 4.6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25geEnum_aSKxOppVz6a6njhlbK0k0EvbMw&s",
      fees: 800,
    },
    {
      id: 2,
      name: "Dr. Hermione Granger",
      specialization: "Dentist",
      department: "Dental Care",
      desc: "Experienced dental surgeon with expertise in cosmetic dentistry, root canal treatments, and preventive oral healthcare. Focuses on painless procedures and long-term oral health.",
      experience: "10 years",
      rating: 4.7,
      image:
        "https://imgcdn.stablediffusionweb.com/2024/12/15/5985c6a4-8f7f-4fde-b436-d542a7ae1ac3.jpg",
      fees: 600,
    },
    {
      id: 3,
      name: "Dr. Ron Weasley",
      specialization: "Pediatrician",
      department: "Pediatrics",
      desc: "Dedicated pediatrician providing comprehensive medical care for infants, children, and adolescents. Special interest in child nutrition, immunization, and developmental health.",
      experience: "5 years",
      rating: 4.4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9ywKZMNzFW3ULvITn9mB7Z5GGzbpwcXWOg&s",
      fees: 500,
    },
    {
      id: 4,
      name: "Dr. Draco Malfoy",
      specialization: "Orthopedic Surgeon",
      department: "Orthopedics",
      desc: "Orthopedic specialist focusing on bone, joint, and spine disorders. Experienced in treating fractures, arthritis, and sports injuries with both surgical and non-surgical methods.",
      experience: "10 years",
      rating: 4.5,
      image:
        "https://i.pinimg.com/736x/ae/58/b1/ae58b1266e7e242493f1327225b20a02.jpg",
      fees: 400,
    },
    {
      id: 5,
      name: "Dr. Ginny Weasley",
      specialization: "Psychiatrist",
      department: "Mental Health",
      desc: "Mental health specialist offering diagnosis and treatment for anxiety, depression, and stress-related disorders. Emphasizes a holistic and empathetic approach to mental wellbeing.",
      experience: "8 years",
      rating: 4.6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyZS21t7ndgfCNb_9mEFMmb8W4_QhMMk2Kw&s",
      fees: 550,
    },
    {
      id: 6,
      name: "Dr. Rubeus Hagrid",
      specialization: "Oncologist",
      department: "Oncology",
      desc: "Experienced oncologist specializing in cancer diagnosis, chemotherapy planning, and long-term cancer care. Works closely with patients and families throughout treatment journeys.",
      experience: "12 years",
      rating: 4.5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjI3oMJ5Hnd26OjVkvQIjSsiZTpuJMCj5t0Q&s",
      fees: 750,
    },
    {
      id: 7,
      name: "Dr. Severus Snape",
      specialization: "Neurologist",
      department: "Neurology",
      desc: "Neurology expert treating disorders of the brain and nervous system including migraines, epilepsy, and stroke rehabilitation. Known for precise diagnosis and evidence-based care.",
      experience: "14 years",
      rating: 4.6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKyulRdkrP32W111en6KgNaGSgxH28ha5cg&s",
      fees: 950,
    },
    {
      id: 8,
      name: "Dr. Albus Dumbledore",
      specialization: "Gynecologist",
      department: "Gynecology",
      desc: "Experienced gynecologist specializing in reproductive health, infertility, and women's wellness. Works closely with patients and families to offer personalized care.",
      experience: "15 years",
      rating: 4.7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6b2jdrqNVn3-e7aUG0TMqSBIlLaaCVFUNQ&s",
      fees: 1000,
    },
    {
      id: 9,
      name: "Dr. Minerva McGonagall",
      specialization: "Urologist",
      department: "Urology",
      desc: "Urologist specializing in urinary tract disorders, bladder cancer, and male reproductive health. Works closely with patients and families to offer personalized care.",
      experience: "11 years",
      rating: 4.5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpK4UVWqf9R2Rst0M--GQQ_lrSC5u6SjlZw&s",
      fees: 950,
    },
  ],
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    addDoctor: (state, action) => {
      state.doctors.push(action.payload);
    },
  },
});

export const { addDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;

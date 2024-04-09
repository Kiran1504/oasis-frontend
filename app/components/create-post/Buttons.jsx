// Component for the final community selection and share button

export default function Buttons({ communities, setSelectedCommunity }) {

    // Set the selected community 
    
    const handleChange = (event) => {
      const selectedCommunity = event.target.value;
      setSelectedCommunity(selectedCommunity);
    };
  
    return (
      <section className="flex gap-4">
        <select onChange={handleChange} className="p-2 bg-black rounded-md">
          <option className="text-black">Select Community</option>
          {communities.map((community, index) => (
            <option key={index} value={community}>{community}</option>
          ))}
        </select>
        <button type="submit" className="p-2 bg-black rounded-md">Share</button>
      </section>
    )
  }
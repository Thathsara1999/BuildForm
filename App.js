import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formFields, setFormFields] = useState([{ type: 'Welcome Screen' }]);
  const [newField, setNewField] = useState('');
  const [formTitle, setFormTitle] = useState('Welcome');
  const [formDescription, setFormDescription] = useState('Hello');
  const [buttonText, setButtonText] = useState('Start');
  const [uploadedImage, setUploadedImage] = useState(null);

  // Function to add new fields dynamically
  const addField = () => {
    if (newField.trim() !== '') {
      setFormFields([...formFields, { type: newField }]);
      setNewField('');
    }
  };

  // Function to handle image uploads
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <div className="nav-item">Content</div>
        <div className="nav-item">Design</div>
        <div className="nav-item">Share</div>
        <div className="nav-item">Replies</div>
      </div>

      {/* Main Section with Form Fields */}
      <div className="form-container">
        <h1>Steps</h1>
        <p>The steps users will take to complete the form.</p>
        <div className="fields">
          {/* Dynamically Render Form Fields */}
          {formFields.map((field, index) => (
            <div key={index} className="field-item">
              <button className="field-button">{field.type}</button>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Field Type (e.g., Phone Number)"
          value={newField}
          onChange={(e) => setNewField(e.target.value)}
          className="input-field"
        />
        <button onClick={addField} className="add-button">
          + Add Field
        </button>
      </div>

      {/* Dynamic Form Editor */}
      <div className="editor-container">
        <h2>Editing Welcome Screen</h2>
        <input
          type="text"
          placeholder="Form Title"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="editor-input"
        />
        <input
          type="text"
          placeholder="Description"
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          className="editor-input"
        />
        <input
          type="text"
          placeholder="Button Text"
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          className="editor-input"
        />
        <input type="file" onChange={handleImageUpload} className="editor-input" />
      </div>

      {/* Preview Section */}
      <div className="preview-container">
        <h1>{formTitle}</h1>
        <p>{formDescription}</p>
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="preview-image" />}
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default App;

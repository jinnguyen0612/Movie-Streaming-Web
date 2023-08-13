import React from 'react'
import AdminLayout from '../../layout/AdminLayout';
import { MdAddCircle } from 'react-icons/md';
import { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import { Movies } from './../../Data/MovieData';
import { TbLock, TbLockOpen } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import axiosApiInstance from '../../context/intercepter';
import { useEffect } from 'react';

function AdminMovies() {
  const param = useLocation();

  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [film, setFilm] = useState([]);
  const [photo, setPhoto] = useState();
  const [filePhoto, setFilePhoto] = useState();
  const [video, setVideo] = useState();
  const [fileVideo, setFileVideo] = useState();
  const [form, setForm] = useState();

  const [film_name, setName] = useState();
  const [length, setLength] = useState();
  const [productionYear, setProductionYear] = useState();
  const [decription, setDecription] = useState();
  const [price, setPrice] = useState();
  const [genreID, setGenreID] = useState();
  const [status, setStatus] = useState(true);
  const [id, setID] = useState();

  const [change, setChange] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage,setLastPage] = useState(1);
  const [filmsPerPage] = useState(10);
  const indexOfLastFilms = currentPage * filmsPerPage;
  const indexOfFirstFilms = indexOfLastFilms - filmsPerPage;
  const currentFilm = film.slice(indexOfFirstFilms, indexOfLastFilms);
  const [block, setBlock] = useState();


  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  async function getFilms() {
      const result = await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + `/films/getAll`);
      setLoad(true);
      setFilm(result?.data);
  }

  useEffect(() => {
      getFilms();
      film.length%10==0? setLastPage(Math.floor(film.length/10)):setLastPage(Math.floor(film.length/10)+1);
    }, [param,film.length,photo]);
  const [title, setTitle] = useState("");
  const Head = "text-xs text-center text-main font-semibold px-6 py-2 uppercase";
  const Text = "text-sm text-center leading-6 whitespace-nowrap px-5 py-3";

  const handleClose = () => {
    setShow(false);
    setName(null);
    setPhoto(null);
    setFilePhoto(null);
    setVideo(null);
    setFileVideo(null);
    setDecription(null);
    setLength(null);
    setGenreID(null);
    setPrice(null);
    setProductionYear(null);
    setStatus(true);
  }

  const handleInfo = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    const name = e.currentTarget.getAttribute("data-name");
    const photo = e.currentTarget.getAttribute("data-photo");

    setForm("edit");
    setTitle("Edit Film");
    setName(name);
    setID(id);
    setPhoto(photo);
    setShow(true);
  }

  const handleShowAdd = (e) => {
    setName(null);
    setPhoto(null);
    setFilePhoto(null);
    setVideo(null);
    setFileVideo(null);
    setDecription(null);
    setLength(null);
    setGenreID(null);
    setPrice(null);
    setProductionYear(null);
    setStatus(true);
    setID(null);
    setForm("add");
    setShow(true);
    setTitle("Add Film")
  }

  const handleFilePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    setFilePhoto(selectedFile);
  };

  const handlePhotoUpload = async () => {
    if (!filePhoto) {
      toast.error("Vui lòng chọn tệp ảnh");
      return;
    }

    const formData = new FormData();
    formData.append("photo", filePhoto);

    try {
      const response = await axios.post(
        axios.defaults.baseURL + `/upload/photo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response?.data.message === "Upload success") {
        toast.success("Tải ảnh lên thành công");
        setPhoto(response.data.picture_url.toString());
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      }

      // Sau khi hoàn thành, bạn có thể làm sạch trạng thái file
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi tải ảnh lên. Vui lòng thử lại.");
    }
  };

  const handleFileVideoChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileVideo(selectedFile);
  };

  const handleVideoUpload = async () => {
    if (!fileVideo) {
      toast.error("Vui lòng chọn tệp ảnh");
      return;
    }

    const formData = new FormData();
    formData.append("video_file", fileVideo);

    try {
      const response = await axios.post(
        axios.defaults.baseURL + `/upload/photo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response?.data.message === "Upload success") {
        toast.success("Tải ảnh lên thành công");
        setPhoto(response.data.picture_url.toString());
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.");
      }

      // Sau khi hoàn thành, bạn có thể làm sạch trạng thái file
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi tải ảnh lên. Vui lòng thử lại.");
    }
  };

  return (
    <AdminLayout>
        <>
        <div className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'>
            <div className='flex flex-col gap-6'>
                <div className='flex-btn gap-2'>
                    <h2 className='text-xl font-bold'>Movies</h2>
                    <div className='flex flex-row'>
                        <button type="button" onClick={handleShowAdd} className='bg-main font-medium transitions hover:bg-green-400 border border-green-400 text-green-400 hover:text-white py-3 px-6 rounded ml-2 flex flex-row'>
                            <MdAddCircle className='w-6 h-6 mr-1'/> Add Movie
                        </button>
                    </div>
                </div>
            </div>
        </div>
          
        <div className='p-5 my-5'>
        <div className='overflow-x-scroll overflow-hidden relative w-full rounded-lg'>
            <table className='w-full table-auto border border-border divide-y divide-border'>
                <thead>
                    <tr className='bg-dryGray'>
                        <th scope='col' className={`${Head}`}>
                            Movie ID
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Movie Name
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Poster
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Genre
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Year
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Monites
                        </th>
                        <th scope='col' className={`${Head}`}>
                            Action
                        </th>
                    </tr>
                </thead>
                  <tbody className='bg-main divide-y divide-gray-800'>
                      {
                        film.map((movie,index)=>(
                          <tr key={movie.id}>
                              <td className={`${Text} truncate`}>{(currentPage-1)*10+index+1}</td>
                              <td className={`${Text}`}>{movie.title}</td>
                              <td className={`${Text}`}>
                                  <div className='w-12 bg-dry border border-border h-12 rounded overflow-hidden'>
                                      <img
                                      className='h-12 w-12 object-cover'
                                      src={`${movie.poster}`}
                                      alt={movie?.title}/>    
                                  </div>
                              </td>
                              <td className={`${Text}`}>{movie.genre.name}</td>
                              <td className={`${Text}`}>{movie.production_year}</td>
                              <td className={`${Text}`}>{movie.length}</td>
                  
                              <td className={`${Text} flex-rows gap-2 mt-2`}>
                                  <button type='button' onClick={handleInfo} className='border border-white bg-yellow-200 flex-rows gap-2 text-main rounded py-1 px-2'>
                                      <FaEdit/> Edit
                                  </button>
                                  <button type = 'button' className='border border-white bg-subMain flex-rows gap-2 text-white rounded py-1 px-2'>
                                      {!movie.status?<TbLock className='w-6 h-6'/>:<TbLockOpen className='w-6 h-6'/>}
                                  </button>
                              </td>
                          </tr>
                        ))}
                  </tbody>
              </table>
          </div>
        </div>
        
        {show ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border border-white rounded-lg shadow-lg relative flex flex-col w-full bg-dry outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t ">
                  <h3 className="text-3xl font=semibold">{title}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={handleClose}
                  >
                    <GiCancel className="text-white h-6 w-6 text-xl blockpy-0"/>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-dryGray text-sm font-medium mb-1">
                      Movie Name
                    </label>
                    <input 
                      required
                      value={film_name}
                      onChange={(e) => setName(e.target.value)}
                      className="shadow bg-main appearance-none rounded w-full py-2 px-1 border border-border text-white" />
                    <label className="block text-dryGray text-sm font-medium mb-1">
                      Poster
                    </label>
                    <div>
                      <input 
                        type="file"
                        accept="image/*"
                        onChange={handleFilePhotoChange}
                        className="shadow bg-main appearance-none rounded w-full py-2 px-1 border border-border text-white" />
                      {filePhoto?
                        <button type='button' onClick={handlePhotoUpload}>Upload</button>
                        :<></>
                      }
                    </div>
                    <label className="block text-dryGray text-sm font-medium mb-1">
                      Decription
                    </label>
                    <input 
                      required
                      value={decription}
                      onChange={(e) => setDecription(e.target.value)}
                      className="shadow bg-main appearance-none rounded w-full py-2 px-1 border border-border text-white" />                    
                    <label className="block text-dryGray text-sm font-medium mb-1">
                      Length
                    </label>
                    <input 
                      required
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="shadow bg-main appearance-none rounded w-full py-2 px-1 border border-border text-white" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-green-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleClose}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

        </>
    </AdminLayout>
  )
}

export default AdminMovies
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import FromGroup from "../../components/common/FromGroup";
import FromRow from "../../components/common/FromRow";
import { Dropdown } from "../../components/dropdown";
import { Input, Textarea } from "../../components/input";
import { Label } from "../../components/label";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-date-picker";
// import ReactQuill, { Quill } from "react-quill";
import ReactQuill from "react-quill";
import { Quill } from "react-quill";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageUploader from "quill-image-uploader";
import Gap from "../../components/common/Gap";
import { Button } from "../../components/button";
import axios from "axios";
import useOnChange from "../../hooks/useOnChange";
import { apiURL, imgbbAPI } from "../../config/config";
import ImageUpLoad from "../../components/image/ImageUpLoad";
Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["architecture", "education"];

const CampaignAddNew = () => {
    const { handleSubmit, control, setValue, reset, watch } = useForm();
    useEffect(() => {
        toast.success("Create campaign successfully");
    });
    const getDropdownLabel = (name, defaultValue = "") => {
        const value = watch(name) || defaultValue;
        return value;
    };
    const [content, setContent] = React.useState("");
    const resetValues = () => {
        setStartDate("");
        setEndDate("");
        reset({});
    };
    const handleAddNewCampaign = async (values) => {
        try {
            await axios.post(`${apiURL}/campaigns`, {
                ...values,
                content,
                startDate,
                endDate,
            });
            toast.success("Create campaign successfully");
            resetValues();
        } catch (error) {
            toast.error("can not create new campaign");
        }
    };
    const modules = useMemo(
        () => ({
            toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote"],
                [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["link", "image"],
            ],
            // imageUploader: {
            //     upload: async (file) => {
            //         const bodyFormData = new FormData();
            //         bodyFormData.append("image", file);
            //         const response = await axios({
            //             method: "post",
            //             url: imgbbAPI,
            //             data: bodyFormData,
            //             headers: {
            //                 "Content-Type": "multipart/form-data",
            //             },
            //         });
            //         return response.data.data.url;
            //     },
            // },
        }),
        []
    );

    const handleSelectDropdownOption = (name, value) => {
        setValue(name, value);
    };

    const [countries, setCounTries] = useState([]);
    // https://restcountries.com/v3.1/name/vietnam
    // https://restcountries.com/v3.1/name/peru
    // ${filterCountry}?fullText=true
    // 974d008fa34f3aebcd80ce86dd80d6b5
    const [filterCountry, setFilterCountry] = useOnChange(500);
    useEffect(() => {
        async function fetchCountries() {
            if (!filterCountry) return;
            try {
                console.log("countries: ", countries);
                const response = await axios.get(
                    `https://restcountries.com/v3.1/name/${filterCountry}`
                );
                console.log("response: ", response);
                console.log("response: ", response.data);
                setCounTries(response.data);
            } catch (error) {
                toast.error(error.message);
            }
        }
        fetchCountries();
    }, [filterCountry]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div className="bg-white rounded-xl py-10 px-[66px]">
            <div className="text-center">
                <h1 className="px-[59px] py-4 font-bold text-2xl inline-block bg-text4 bg-opacity-5 rounded-lg mb-10">
                    Start a Campaign 🚀
                </h1>
            </div>
            <form onSubmit={handleSubmit(handleAddNewCampaign)}>
                <FromRow>
                    <FromGroup>
                        <Label>Campaign Title *</Label>
                        <Input
                            control={control}
                            name="title"
                            placeholder="Write a title"
                        ></Input>
                    </FromGroup>
                    <FromGroup>
                        <Label>Select a category *</Label>
                        <Dropdown>
                            <Dropdown.Select
                                placeholder={getDropdownLabel(
                                    "category",
                                    "Select category"
                                )}
                            ></Dropdown.Select>
                            <Dropdown.List>
                                {categoriesData.map((category) => (
                                    <Dropdown.Option
                                        key={category}
                                        onClick={() =>
                                            handleSelectDropdownOption(
                                                "category",
                                                category
                                            )
                                        }
                                    >
                                        <span className="capitalize">
                                            {category}
                                        </span>
                                    </Dropdown.Option>
                                ))}
                                {/* <Dropdown.Option>Crypto</Dropdown.Option> */}
                            </Dropdown.List>
                        </Dropdown>
                    </FromGroup>
                </FromRow>
                <FromGroup>
                    <Label>Short Description *</Label>
                    <Textarea
                        name="short_description"
                        placeholder="Write a short description...."
                        control={control}
                    ></Textarea>
                </FromGroup>
                <FromGroup>
                    <Label>Story *</Label>
                    <ReactQuill
                        placeholder="Write your story......"
                        modules={modules}
                        theme="snow"
                        value={content}
                        onChange={setContent}
                    />
                </FromGroup>
                <Gap></Gap>
                <img srcSet="/Offer.png 2x" alt="" className="w-full" />
                <Gap></Gap>
                <FromRow>
                    <FromGroup>
                        <Label>Featured Image</Label>
                        <ImageUpLoad
                            onChange={setValue}
                            name="featured_image"
                        ></ImageUpLoad>
                        {/* image up load */}
                    </FromGroup>
                    <FromGroup></FromGroup>
                </FromRow>
                <FromRow>
                    <FromGroup>
                        <Label>Goal *</Label>
                        <Input
                            control={control}
                            name="goal"
                            placeholder="$0.00 USD"
                        ></Input>
                    </FromGroup>
                    <FromGroup>
                        <Label>Raised Amount *</Label>
                        <Input
                            control={control}
                            name="amount"
                            placeholder="$0.00 USD"
                        ></Input>
                    </FromGroup>
                </FromRow>
                <FromRow>
                    <FromGroup>
                        <Label>Amount Prefilled</Label>
                        <Input
                            control={control}
                            name="prefilled"
                            placeholder="Amount Prefilled"
                        ></Input>
                        <p className="text-left text-text3 mt-[7px]">
                            It will help fill amount box by click, place each
                            amount by comma, ex: 10,20,30,40
                        </p>
                    </FromGroup>
                    <FromGroup>
                        <Label>Video</Label>
                        <Input
                            control={control}
                            name="video"
                            placeholder="Video"
                        ></Input>
                        <p className="text-text3 text-sm">
                            Place Youtube or Vimeo Video URL
                        </p>
                    </FromGroup>
                    <FromGroup>
                        <Label>Campaign End Method</Label>
                        <Dropdown>
                            <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                            <Dropdown.List></Dropdown.List>
                        </Dropdown>
                    </FromGroup>
                    <FromGroup>
                        <Label>Country</Label>
                        <Dropdown>
                            <Dropdown.Select
                                placeholder={getDropdownLabel(
                                    "country",
                                    "Select country"
                                )}
                            ></Dropdown.Select>
                            <Dropdown.List>
                                <Dropdown.Search
                                    placeholder="Search country"
                                    onChange={setFilterCountry}
                                ></Dropdown.Search>
                                {countries.length > 0 &&
                                    countries.map((country) => (
                                        <Dropdown.Option
                                            key={country?.name?.common}
                                            onClick={() =>
                                                handleSelectDropdownOption(
                                                    "country",
                                                    country?.name?.common
                                                )
                                            }
                                        >
                                            {country?.name?.common}
                                        </Dropdown.Option>
                                    ))}
                            </Dropdown.List>
                        </Dropdown>
                    </FromGroup>
                </FromRow>
                <FromRow>
                    <FromGroup>
                        <Label>Start Date</Label>
                        <DatePicker onChange={setStartDate} value={startDate} />
                    </FromGroup>
                    <FromGroup>
                        <Label>End Date</Label>
                        <DatePicker onChange={setEndDate} value={endDate} />
                    </FromGroup>
                </FromRow>
                <div className="text-center mt-4">
                    <Button
                        type="submit"
                        className="bg-primary text-white mx-auto px-9"
                    >
                        Submit new campaign{" "}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CampaignAddNew;

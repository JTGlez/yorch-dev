import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogInIcon } from "lucide-react";
import Image from "next/image";

interface ContentCardProps {

}

const ContentCard: React.FC<ContentCardProps> = ({ }) => {

    return (
        <Card className="w-full md:w-[350px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <CardHeader className="relative">
                <Image
                    src="https://jtglez.github.io/Portfolio/assets/img/crypto.PNG"
                    alt="Elegant Watch"
                    className="w-full h-48 object-cover object-center transition duration-300 ease-in-out"
                    width={300}
                    height={300}
                />
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold mb-2">CryptoCypher</CardTitle>
                <CardDescription className="text-gray-700 mb-4">
                    Text Encryptor and Decryptor with Substitution, AES-ECB, and 3DES.
                </CardDescription>
            </CardContent>
            <CardFooter className="p-4 bg-gray-100">
                <Button className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out">
                    <LogInIcon className="mr-2" /> Try it!
                </Button>
            </CardFooter>
        </Card>
    )
}


export default ContentCard;
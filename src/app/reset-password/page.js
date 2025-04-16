'use client'

import { Suspense } from "react"
import ResetPasswordForm from "./components/ResetPasswordForm"

// Page component with Suspense boundary
export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-black">
            <Suspense fallback={<p className="text-white">Loading...</p>}>
                <ResetPasswordForm />
            </Suspense>
        </div>
    )
}
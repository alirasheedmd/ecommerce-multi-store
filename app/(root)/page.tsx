"use client"

import { Modal } from "@/components/ui/modal"

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal
        title="Test"
        description="Test Desc"
        isOpen={true}
        onClose={() => {}}
      >
        <p>Children</p>
      </Modal>
    </div>
  )
}

export default SetupPage

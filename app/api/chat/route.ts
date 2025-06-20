import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    
    // Log để debug
    console.log('Received message:', message)
    
    // Gọi API backend của bạn (thay đổi URL này theo API thực tế của bạn)
    const backendResponse = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
    })
    
    if (!backendResponse.ok) {
      throw new Error(`Backend API error: ${backendResponse.status}`)
    }
    
    const data = await backendResponse.json()
    console.log('Backend response:', data)
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: 'Xin lỗi, đã có lỗi xảy ra.' },
      { status: 500 }
    )
  }
} 
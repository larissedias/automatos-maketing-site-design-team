
'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Upload, 
  Search, 
  Filter, 
  FileText, 
  File, 
  Image, 
  Database,
  Trash2,
  Download,
  Eye,
  MoreVertical,
  FolderOpen,
  Plus
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const documents = [
  {
    id: 'doc-001',
    name: 'API Documentation v2.1',
    type: 'pdf',
    size: '2.4 MB',
    uploadedAt: '2024-01-15',
    status: 'processed',
    vectorized: true,
    category: 'Technical',
    tags: ['api', 'documentation', 'v2.1'],
    chunks: 45,
    summary: 'Comprehensive API documentation covering all endpoints and authentication methods.'
  },
  {
    id: 'doc-002',
    name: 'Security Guidelines',
    type: 'docx',
    size: '1.8 MB',
    uploadedAt: '2024-01-14',
    status: 'processed',
    vectorized: true,
    category: 'Security',
    tags: ['security', 'guidelines', 'best-practices'],
    chunks: 32,
    summary: 'Security best practices and guidelines for development teams.'
  },
  {
    id: 'doc-003',
    name: 'Code Review Checklist',
    type: 'md',
    size: '124 KB',
    uploadedAt: '2024-01-13',
    status: 'processed',
    vectorized: true,
    category: 'Development',
    tags: ['code-review', 'checklist', 'quality'],
    chunks: 15,
    summary: 'Comprehensive checklist for conducting effective code reviews.'
  },
  {
    id: 'doc-004',
    name: 'Performance Metrics Report',
    type: 'xlsx',
    size: '3.2 MB',
    uploadedAt: '2024-01-12',
    status: 'processing',
    vectorized: false,
    category: 'Analytics',
    tags: ['performance', 'metrics', 'report'],
    chunks: 0,
    summary: 'Detailed performance metrics and analysis for Q4 2023.'
  },
  {
    id: 'doc-005',
    name: 'User Manual Draft',
    type: 'pdf',
    size: '5.1 MB',
    uploadedAt: '2024-01-11',
    status: 'failed',
    vectorized: false,
    category: 'Documentation',
    tags: ['manual', 'user-guide', 'draft'],
    chunks: 0,
    summary: 'Draft version of the user manual with updated screenshots.'
  }
]

const stats = [
  {
    label: 'Total Documents',
    value: '1,247',
    change: '+89 this month',
    icon: FileText,
    color: 'text-blue-400'
  },
  {
    label: 'Processed',
    value: '1,156',
    change: '92.7% success rate',
    icon: Database,
    color: 'text-green-400'
  },
  {
    label: 'Storage Used',
    value: '45.2 GB',
    change: '+2.1 GB this week',
    icon: FolderOpen,
    color: 'text-orange-400'
  },
  {
    label: 'Vector Chunks',
    value: '24,567',
    change: '+1,247 chunks',
    icon: Database,
    color: 'text-purple-400'
  }
]

const statusStyles: Record<string, string> = {
  processed: 'bg-green-500/10 text-green-400 border-green-500/20',
  processing: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  failed: 'bg-red-500/10 text-red-400 border-red-500/20',
  pending: 'bg-gray-500/10 text-gray-400 border-gray-500/20'
}

const typeIcons: Record<string, any> = {
  pdf: FileText,
  docx: FileText,
  md: File,
  txt: File,
  xlsx: FileText,
  csv: FileText,
  json: File,
  xml: File
}

export function DocumentManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setIsUploading(true)
    setUploadProgress(0)

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const formData = new FormData()
        formData.append('file', file)

        // Simulate upload progress
        const interval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 90) {
              clearInterval(interval)
              return 90
            }
            return prev + 10
          })
        }, 200)

        // Upload to backend API
        const response = await fetch('http://localhost:8002/api/documents/upload', {
          method: 'POST',
          body: formData,
        })

        clearInterval(interval)
        setUploadProgress(100)

        if (!response.ok) {
          throw new Error(`Failed to upload ${file.name}`)
        }

        // Small delay to show completion
        await new Promise(resolve => setTimeout(resolve, 500))
      }

      // Reset state after successful upload
      setTimeout(() => {
        setIsUploading(false)
        setUploadProgress(0)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      }, 1000)

    } catch (error) {
      console.error('Upload error:', error)
      setIsUploading(false)
      setUploadProgress(0)
      // You could show an error toast here
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e.target.files)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files)
    }
  }

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="space-y-8">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.docx,.txt,.md,.xlsx,.csv,.json,.xml"
        onChange={handleFileChange}
        className="hidden"
      />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Document <span className="gradient-text">Management</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your knowledge base and document processing pipeline
          </p>
        </div>
        
        <Button 
          className="gradient-accent hover:opacity-90 transition-opacity"
          onClick={handleUploadClick}
          disabled={isUploading}
        >
          <Upload className={`w-4 h-4 mr-2 ${isUploading ? 'animate-spin' : ''}`} />
          {isUploading ? `Uploading... ${uploadProgress}%` : 'Upload Documents'}
        </Button>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="glass-card p-6 card-glow hover:border-primary/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
              <p className="text-xs text-green-400">{stat.change}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Document Management Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Tabs defaultValue="library" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid bg-secondary/50">
            <TabsTrigger value="library" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Document Library</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Upload</span>
            </TabsTrigger>
            <TabsTrigger value="processing" className="flex items-center space-x-2">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Processing</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search documents by name, category, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-secondary/50 border-secondary focus:border-primary/50"
                />
              </div>
              <Button variant="outline" className="shrink-0">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Document Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc, index) => {
                const TypeIcon = typeIcons[doc.type] || File
                
                return (
                  <motion.div
                    key={doc.id}
                    className="glass-card p-6 card-glow hover:border-primary/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                          <TypeIcon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold truncate">{doc.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {doc.type.toUpperCase()} • {doc.size}
                          </p>
                        </div>
                      </div>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Status and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={statusStyles[doc.status]}>
                        {doc.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {doc.category}
                      </Badge>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {doc.summary}
                    </p>

                    {/* Processing Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Vector Chunks</p>
                        <p className="text-xs text-muted-foreground">{doc.chunks}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Uploaded</p>
                        <p className="text-xs text-muted-foreground">{doc.uploadedAt}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {doc.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {doc.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{doc.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Upload Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                    dragActive 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border/50 hover:border-primary/50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className={`w-12 h-12 mx-auto mb-4 ${
                    dragActive ? 'text-primary' : 'text-muted-foreground'
                  } ${isUploading ? 'animate-bounce' : ''}`} />
                  
                  {isUploading ? (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Uploading...</h3>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">{uploadProgress}% complete</p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold mb-2">
                        {dragActive ? 'Drop files here' : 'Drag and drop files here'}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Supports PDF, DOCX, TXT, MD, XLSX, CSV, JSON, XML and more
                      </p>
                      <Button 
                        className="gradient-accent hover:opacity-90"
                        onClick={handleUploadClick}
                        disabled={isUploading}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Choose Files
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="processing" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Document Processing Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center text-muted-foreground">
                    Processing pipeline monitoring will be displayed here
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Document Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center text-muted-foreground">
                    Document usage analytics and insights will be displayed here
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
